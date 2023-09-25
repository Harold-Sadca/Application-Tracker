import mongoose, { ConnectOptions } from 'mongoose';
import { mockApplications, mockInterviews, mockUsers } from './dataHelper';
import { createUser } from '../models/methods/userMethods';
import { createApplication } from '../models/methods/applicationMethods';
import { TypeApplication, TypeInterview } from '../types/types';
import { createInterview } from '../models/methods/interviewMethods';
import { ObjectId } from 'mongodb';

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/application-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    db.dropDatabase();
    console.log('Database connected. Starting seeding.');
    for (let i = 0; i < mockUsers.length; i++) {
      const user = await createUser(mockUsers[i]);
      const application1 = await createApplication(
        mockApplications[i] as TypeApplication,
        user?._id as unknown as string
      );
      const application2 = await createApplication(
        mockApplications[i + 1] as TypeApplication,
        user?._id as unknown as string
      );
      const interview1 = await createInterview(
        mockInterviews[i] as TypeInterview,
        application1?._id as ObjectId
      );
      const interview2 = await createInterview(
        mockInterviews[i + 1] as TypeInterview,
        application2?._id as ObjectId
      );
    }
    console.log('Database seeding complete. Disconnecting');
  });
}
