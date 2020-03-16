import {Award} from './award';
import {ClubPosition} from './clubPosition';
import {PersonalInfo} from './personalInfo';

export interface Portfolio {
    id: string;
    personalInfo: PersonalInfo,
    awards: Award[];
    positions: ClubPosition[];
}