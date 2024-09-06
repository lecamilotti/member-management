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
  members: Member[] = [];
  filteredMembers: Member[] = [];
  searchTerm: string = '';
  isFilterPanelOpen: boolean = false; // Initialize as false

  // Filter options
  filterOptions = {
    membershipStatus: ['Active', 'Inactive'],
    subscriptionType: ['Monthly', 'Annual'],
    invoiceStatus: ['Paid', 'Pending'],
  };

  // Active filters
  activeFilters: { [key: string]: string | undefined } = {};

  constructor(private memberService: MemberService) {
    this.members = this.memberService.getMembers();
    this.filteredMembers = [...this.members];
  }

  // Apply search and filters to filter the members
  applyFilters(): void {
    this.filteredMembers = this.members.filter((member) => {
      const { membershipStatus, subscriptionType, invoiceStatus } =
        this.activeFilters;

      // Filter by membership status
      const matchesStatus = membershipStatus
        ? member.membershipStatus === membershipStatus
        : true;

      // Filter by subscription type
      const matchesSubscription = subscriptionType
        ? member.subscriptionType === subscriptionType
        : true;

      // Filter by invoice status
      const matchesInvoiceStatus = invoiceStatus
        ? member.invoices.some((invoice) => invoice.status === invoiceStatus)
        : true;

      // Search by name
      const matchesSearch = member.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      // Final check for all conditions
      return (
        matchesStatus &&
        matchesSubscription &&
        matchesInvoiceStatus &&
        matchesSearch
      );
    });
  }

  // Handle search input change
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.applyFilters();
  }

  // Handle the change in filter options (checkbox or dropdown)
  onFilterChange(type: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.activeFilters[type] = target.value || undefined; // Remove filter if value is empty
    this.applyFilters();
  }

  // Handle checkbox change for filter options
  onCheckboxChange(type: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.activeFilters[type] = target.checked ? target.value : undefined;
  }

  // Clear a specific filter
  clearFilter(type: string): void {
    delete this.activeFilters[type];
    this.applyFilters();
  }

  // Clear all filters
  clearAllFilters(): void {
    this.activeFilters = {};
    this.searchTerm = ''; // Also clear the search term
    this.applyFilters();
    this.toggleFilterPanel();
  }

  // Toggle filter panel visibility
  toggleFilterPanel(): void {
    this.applyFilters();
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
  }
}
