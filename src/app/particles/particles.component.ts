import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css'],
})
export class ParticlesComponent implements OnInit {
  bubbles = 400;
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() {}

  ngOnInit(): void {
    this.particles();
  }

  private particles() {
    this.myStyle = {
      'background-color': 'rgb(15,14,17)',
      position: 'relative',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: this.bubbles,
        },
        color: {
          value: '#E719E7',
        },
        shape: {
          type: 'circle',
        },
        line_linked: {
          distance: 100,
          color: '#b6bac1',
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          grab: {
            distance: 150,
            line_linked: {
              opacity: 1,
            },
          },
        },
      },
    };
  }
}
