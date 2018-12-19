import path from 'path';
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

export default class AppConfiguration {
    static setGlobalConfiguration(app){
        this.setApplicationViews(app);
        this.setApplicationGlobalMiddleware(app);
        app.use(express.static(path.join(__dirname, '../public')));
    }

    static setApplicationViews(app){
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'pug');
    }

    static setApplicationGlobalMiddleware(app){
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
    }
}