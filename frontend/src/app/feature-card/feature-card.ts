import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: false,
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCard {
  features = [
    {
      image: '/assets/plan_task.png',
      title: 'Plan Your Tasks',
      points: [
        'Organize daily work with smart task lists',
        'Set priorities and deadlines easily',
        'Never miss important work again',
        'Stay focused with structured planning'
      ]
    },
    {
      image: '/assets/Team.png',
      title: 'Team Collaboration',
      points: [
        'Work together in real-time',
        'Assign tasks and share updates instantly',
        'Communicate clearly across teams',
        'Improve productivity with collaboration'
      ]
    },
    {
      image: '/assets/personal_progress2.png',
      title: 'Your Progress',
      points: [
        'Track completed and pending tasks',
        'Visualize productivity trends',
        'Measure personal performance',
        'Stay motivated with progress insights'
      ]
    },
    {
      image: '/assets/team_progress.png',
      title: 'Team Progress Overview',
      points: [
        'Monitor team performance in one place',
        'Identify bottlenecks quickly',
        'Ensure project timelines are met',
        'Drive accountability across members'
      ]
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.features.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  // features = [
  //   {
  //     heading: 'Task Management',
  //     text: 'Create, update, and track tasks to manage your workflow easily.'
  //   },
  //   {
  //     heading: 'Team Collaboration',
  //     text: 'Work with teams, assign roles, and monitor each member’s progress.'
  //   },
  //   {
  //     heading: 'Progress Tracking',
  //     text: 'Monitor completion levels and overall productivity in real time.'
  //   },
  //   {
  //     heading: 'Notes Taking',
  //     text: 'Take quick notes and keep them organized without the fear of loosing them'
  //   },
  //   {
  //     heading: 'Schedule Making',
  //     text: 'Schedule tasks to stay organized.'
  //   },
  //   {
  //     heading: 'Work Space',
  //     text: 'Get your own personal workspace without worrying about your files and documents '
  //   },
  // ];


}
