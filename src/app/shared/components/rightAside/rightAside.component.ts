import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightAside',
  templateUrl: './rightAside.component.html',
  styleUrls: ['./rightAside.component.scss']
})
export class RightAsideComponent implements OnInit {
messages=[
  {
  senderName:"Yassin Mustafa",
  senderImg:"assets/profile1.png",
  message:"Hi Angelina! How are You?"
},
{
  senderName:"Mohamed Mustafa",
  senderImg:"assets/profile2.png",
  message:"Do you need that design?"
},
{
  senderName:"Omar Mustafa",
  senderImg:"assets/profile3.png",
  message:"What is the price of hourly..."
},
{
  senderName:"Ahmed Mustafa",
  senderImg:"assets/profile4.png",
  message:"Awsome design!!"
},
]
  constructor() { }

  ngOnInit() {
  }
}
