import {Award} from './award';
import {ClubPosition} from './clubPosition';

export interface Portfolio {
    id: string;
    fullname: string;
    cell: string;
    email: string;
    awards: Award[];
    positions: ClubPosition[];
}