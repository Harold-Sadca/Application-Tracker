import { Router } from 'express';
import {
  createUserController,
  loginController,
  getUser,
  logoutUser,
} from '../controllers/userController';
import { authenticate } from '../utils/authMiddleware';

const userRouter = Router();

userRouter.post('/register', createUserController);
userRouter.post('/login', loginController);
userRouter.delete('/logout', logoutUser);
userRouter.get('/get-user', authenticate, getUser);

export default userRouter;

// {
//   "email": "tester@gmail.com",
//   "_id": "64e6216e07a70768a350a848",
//   "username": "tester",
//   "salt": "65ff9bb0730f67d7235f235df5861eb473a9a6099b669a88a7a6bb406d04a104",
//   "hash": "d05a0c747ff0f0bea66c1402ad808bb67da77d6d085efd2ec9b33e6dee881ea520c9962f34d7cc79bc2b13bea954d69a3a3847bdf6970ac5f280cf8c10eba96dc4442686e31634296cc6dc7991b30483a66b1669fced0a02c62c81b83c38880d0210772f2fc3a5620c267294aece91c2dd719e1b7cb493240a44a865fa8116d0d72ec7506a91e042e893a0756bed1b3f301dedf7a178ec520d2dc49913ae8e8b68b0084de40dc9ec9b41ab36130c87a9f93b6b5f0cd84c7b31243e3192daa4eccdb5d040dbe94f369c656e005182266a9ad2db24c50d43d92a7a3155084b909e576503f20e62fd6107dd00140ce6a344b63b6f63afa0c836adef2a969edf4c765627c3e9c9f3cd338694a70ed66acb7f8d694687aba59fb59c31613524906f18ccb2c7696f04452ee44e5b84986610a165c1a1ae42e543ecea251b12b107717e494b04be9b6acfb994d486f1256c559627eaeaf5b5ab939ece616fa7b689c09b5f453d04697a836eff130099a2b3a359d038550eff3521f6988137c33545164ab9262398cd97003273b99070a46448cc572d706ac7de86c3a88a6dc12cb8bf2413adb4ff1a41bc050efe813747fb30c4188571d808cf50ee8faeafd7656d3506af4100d61c44434204a49a4b4441010fbd896019311252733bec6b3c397d5548d14fa5a5483e79d999c6dec888cd953e06a7ed176d249895f40e66143d4eeee0",
//   "__v": 0
// }
