//@ts-ignore
import express, { Request, json, urlencoded, Response } from "express";
//@ts-ignore
import morgan from "morgan";
//@ts-ignore
import multer from "multer";
import path from "path";
//@ts-ignore
import hbs from "express-handlebars";
import { v4 as uuid } from 'uuid';
import ImagesRoutes from "./routes/images.routes";

const app = express();

// config

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs'
}));

app.set('view engine', '.hbs');

// Middlewares

app.use(morgan('dev'));
app.use(json())
app.use(urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
	destination: path.join(__dirname, 'public/uploads'),
	filename: (req: Request, file: any, callback: Function) => {
		callback(null, uuid() + path.extname(file.originalname));
	}
});

app.use(multer({ storage }).single('image'));

// routes
app.use('/', ImagesRoutes)

export default app;