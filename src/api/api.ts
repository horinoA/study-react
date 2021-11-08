import axios, {AxiosResponse} from "axios";
import { UEStudy } from "../models/UEStudy.interface";

const instance = axios.create({
    baseURL: "localhost:3000",
    timeout: 15000
});

