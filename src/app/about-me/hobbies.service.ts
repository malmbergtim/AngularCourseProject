import { Injectable } from "@angular/core";
import { Hobby } from "./hobby.model";

export class hobbiesService {

    private hobbies: Hobby[]= [
        new Hobby('Powerlifting', 'Under cirka två år har jag powerlifting varit en stor del av mitt liv och är fortfarande en stor del av mitt liv utanför studierna'),

        new Hobby('Mekaniska Tangentbord', 'Under min tid på gymnasiet blev jag intresserad av mekaniska tangentbord, och har sedan dess byggt och sålt en del mekaniska tangentbord')

    ]


    getHobbies() {
        return this.hobbies.slice();
    }

}