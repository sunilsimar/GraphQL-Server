"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zeus_1 = require("./client/zeus");
const chain = (0, zeus_1.Chain)("http://localhost:4000/graphql");
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield chain("query")({
                getUser: [
                    //input
                    {
                        id: "1",
                    },
                    //output
                    {
                        email: true,
                        firstname: true,
                    },
                ],
            });
            console.log(response.getUser);
        }
        catch (e) {
            console.log(e);
        }
    });
}
get();
function send() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield chain("mutation")({
                createUser: [
                    {
                        input: {
                            email: "sunil@gmail.com",
                            firstname: "Sunil",
                            lastname: "Simar",
                        },
                    },
                    {
                        id: true,
                        email: true,
                    },
                ],
            });
            console.log(response.createUser);
        }
        catch (e) {
            console.log(e);
        }
    });
}
send();
