// src/app/member-list/member-list.component.ts
import { Component } from '@angular/core';
import { MemberService, Member } from '../member.service';
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // For ngModel
import { RouterModule } from '@angular/router'; // For routerLink

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Add FormsModule and RouterModule
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent {
  [x: string]: any | string;
  members: Member[] = [];
  filteredMembers: Member[] = [];
  searchTerm: string = '';


  // Filter options for membership status and subscription type
  filterOptions = {
    membershipStatus: ['Active', 'Inactive'],
    subscriptionType: ['Monthly', 'Annual'],
    invoiceStatus: ['Paid', 'Pending'],
  };

  // Active filters
  activeFilters: { [key: string]: string | undefined } = {};
  details: any | string;
  outlets: any | string;

  constructor(private memberService: MemberService) {
    this.members = this.memberService.getMembers();
    this.filteredMembers = [...this.members];
  }

  // Apply search and active filters to filter the members
  applyFilters(): void {
    this.filteredMembers = this.members.filter((member) => {
      const matchesStatus = this.activeFilters['membershipStatus']
        ? member.membershipStatus === this.activeFilters['membershipStatus']
        : true;
      const matchesSubscription = this.activeFilters['subscriptionType']
        ? member.subscriptionType === this.activeFilters['subscriptionType']
        : true;
      const matchesPaidInvoice = this.activeFilters['invoiceStatus']
        ? member.invoices.some((invoice) => invoice.status === 'Paid')
        : true;
      const matchesUnpaidInvoice = this.activeFilters['invoiceStatus']
        ? member.invoices.some((invoice) => invoice.status === 'Pending')
        : true;

      const matchesSearch = member.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      return (
        matchesStatus &&
        matchesSubscription &&
        matchesSearch &&
        matchesPaidInvoice &&
        matchesUnpaidInvoice
      );
    });
  }

  // Handle search input change
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.applyFilters();
  }

  // Handle the change in the dropdown selection
  onFilterChange(type: string, event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.activeFilters[type] = target.value;
    this.applyFilters();
  }

  // Clear a specific filter
  clearFilter(type: string): void {
    delete this.activeFilters[type];
    this.applyFilters();
  }

  // Clear all filters
  clearAllFilters(): void {
    this.activeFilters = {};
    this.applyFilters();
  }
}
