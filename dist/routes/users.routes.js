"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const usersRoute = (0, express_1.Router)();
usersRoute.get('/users', (req, res, next) => {
    const users = [{ userName: 'Aldernei' }];
    res.status(http_status_codes_1.StatusCodes.OK).send({ users });
});
usersRoute.get('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.sendStatus(http_status_codes_1.StatusCodes.OK).send({ uuid });
});
usersRoute.post('/users', (req, res, next) => {
    const newUser = req.body;
    console.log(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).send(newUser);
});
usersRoute.put('/users:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(http_status_codes_1.StatusCodes.OK).send({ uuid });
});
exports.default = usersRoute;
