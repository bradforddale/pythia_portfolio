import {Award} from './award';
import {ClubPosition} from './clubPosition';

export interface Portfolio {
    fullname: string;
    cell: string;
    email: string;
    awards: Award[];
    positions: ClubPosition[]
}