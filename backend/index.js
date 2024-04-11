// // // import express from 'express';
// // // import cookieParser from 'cookie-parser';
// // // import cors from 'cors';
// // // import mongoose from 'mongoose';
// // // import dotenv from 'dotenv';

// // // dotenv.config();
// // // const app = express();
// // // const port = process.env.PORT || 5000;
// // // const corsOptions = {
// // //   origin: true,
// // // };

// // // app.get("/", (req, res) => {
// // //   res.send("Api is working");
// // // });

// // // mongoose.set('strictQuery', false);

// // // const connectDB = async () => {
// // //   try {
// // //     await mongoose.connect(process.env.MONGO_URL,{
// // //       useNewUrlParser:true,
// // //       useUnifiedTopology:true,
// // //     });
// // //     console.log("MongoDB database is connected");
// // //   } catch (err) {
// // //     console.log("MongoDB database connection failed");
// // //   }
// // // };

// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(cors(corsOptions));

// // // app.listen(port, () => {
// // //   connectDB();
// // //   console.log("Server is running on port " + port);
// // // });
// // import express from 'express';
// // import cookieParser from 'cookie-parser';
// // import cors from 'cors';
// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';

// // dotenv.config();
// // const app = express();
// // const port = process.env.PORT || 5000;
// // const corsOptions = {
// //   origin: true,
// // };

// // app.get("/", (req, res) => {
// //   res.send("Api is working");
// // });

// // mongoose.set('strictQuery', false);

// // const connection = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO_URL);
// //     console.log("MongoDB database is connected");
// //   } catch (err) {
// //     console.log("MongoDB database connection failed:", err.message);
// //   }
// // };

// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(cors(corsOptions));

// // app.listen(port, () => {
// //   2
// //   connection();
// //   console.log("Server is running on port " + port);
// // });

// // import express from 'express';
// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';



// // dotenv.config();
// // mongoose.connect(process.env.MONGO).then(() => {
// //   console.log('Connected to MongoDB');
// // }).catch((err) => {
// //   console.log(err);
// // });
// // const app = express();

// // app.use(express.json());

// // // Routes
// // app.use("/api/user", userRoutes);
// // app.use("/api/auth", authRoutes)
// // app.use((err, req, res, next) => {
// //   const statusCode = err.statusCode || 500;
// //   const message = err.message || 'Internal Server Error';
// //   return res.status(statusCode).json({
// //    success: false,
// //     message,
// //    statusCode, 
// //   });
  
// // });

// // // Default route
// // app.get('/', (req, res) => {
// //   return res.status(200).json({
// //     message: 'Welcome  API! Please refer to the documentation to use the API.',
// //     code: 200
// //   });
// // });

// // // 404 route
// // app.use((req, res) => {
// //   return res.status(404).json({
// //     message: '404: Route not found',
// //     code: 404
// //   });
// // });

// // app.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// // });

// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';

// const app = express();
// const port = process.env.PORT || 5000;

// // CORS configuration
// const corsOptions = {
//   origin: '*', // Change this to your frontend URL if needed
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));

// // MongoDB connection
// const connection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB database is connected");
//   } catch (err) {
//     console.error("MongoDB database connection failed:", err.message);
//   }
// };

// // Routes
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// // Starting server
// app.listen(port, () => {
//   connection(); // Connect to MongoDB
//   console.log("Server is running on port " + port);
// });








// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoute from "./Routes/auth.js";
// import userRoute from "./Routes/user.js";

// import doctorRoute from "./Routes/doctor.js";
// import reviewRoute from "./Routes/review.js";
// import connectDB from "./Routes/db.js";


// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// connectDB();

// const corsOptions = {
//   origin: '*', // Change this to your frontend URL if needed
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
// app.use('/api/v1/auth',authRoute);
// app.use('/api/v1/users',userRoute);
// app.use('/api/v1/doctors',doctorRoute);
// app.use('/api/v1/reviews',reviewRoute);




// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
//   app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
// });

// mongoose.connection.on("error", (err) => {
//   console.log(err);
//   logEvents(
//     `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
//     "mongoErrLog.log"
//   );
// });

// mongoose.connection.on("uncaughtException", function (err) {
//   console.log(err);
// });
// app.get("/", (req, res) => {
//   res.send("API is working");
// });


// app.listen(port, () => {
//   connection();
//   console.log("Server is running on port " + port);
// });




// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoute from "./Routes/auth.js";
// import userRoute from "./Routes/user.js";
// import doctorRoute from "./Routes/doctor.js";
// import reviewRoute from "./Routes/review.js";
// import connectDB from "./Routes/db.js";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5001;

// connectDB();

// const corsOptions = {
//   origin: '*', // Change this to your frontend URL if needed
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
// app.use('/api/v1/auth', authRoute);
// app.use('/api/v1/users', userRoute);
// app.use('/api/v1/doctors', doctorRoute);
// app.use('/api/v1/reviews', reviewRoute);

// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
//   app.listen(port, () => console.log(`Server running on PORT ${port}`));
// });

// mongoose.connection.on("error", (err) => {
//   console.log(err);
//   logEvents(
//     `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
//     "mongoErrLog.log"
//   );
// });

// mongoose.connection.on("uncaughtException", function (err) {
//   console.log(err);
// });

// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// app.listen(port, () => {
//   console.log("Server is running on port " + port);
// });

   



import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import connectDB from "./Routes/db.js";
import DoctorSchema from './models/DoctorSchema.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

const corsOptions = {
  origin: '*', // Change this to your frontend URL if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on PORT ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

mongoose.connection.on("uncaughtException", function (err) {
  console.log(err);
});

// Add error handler for unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post('/register', (req, res) => {
  DoctorSchema.create(req.body)
  .then(doctors => res.json(doctors))
  .catch(err => res.json(err));
})
// app.listen(port, () => {
//   console.log("Server is running on port " + port);
// });


