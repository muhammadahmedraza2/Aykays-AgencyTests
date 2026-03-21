import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.set(".reveal-right", { opacity: 0, x: 100 }); 
    ScrollTrigger.create({
      trigger: ".reveal-right",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to(".reveal-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(".reveal-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onLeave: () => gsap.set(".reveal-right", { opacity: 0, x: 100 }),  
      onLeaveBack: () => gsap.set(".reveal-right", { opacity: 0, x: 100 }),
    });

  }

}