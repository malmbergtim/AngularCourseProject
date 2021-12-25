import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { hobbiesService } from './hobbies.service';
import { Hobby } from './hobby.model'
import { Input } from '@angular/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
hobbies: Hobby[];



  constructor(private router: Router, private route: ActivatedRoute, private hobbyService: hobbiesService) { }

  ngOnInit(): void {
   this.hobbies =  this.hobbyService.getHobbies();
  }

  showContactForm() {
    this.router.navigate(['contact-me'], {relativeTo: this.route})
  }


}
