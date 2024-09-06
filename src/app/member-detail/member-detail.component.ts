// src/app/member-detail/member-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService, Member } from '../member.service';
import { CommonModule } from '@angular/common'; // For *ngIf
import { RouterModule } from '@angular/router'; // For routerLink

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule for routerLink
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  member?: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {
    console.log('MemberDetailComponent constructor called');
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('MemberDetailComponent ngOnInit called with id:', id);
    this.member = this.memberService.getMemberById(id);
  }
}
