import { Injectable } from '@angular/core';

export interface Member {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  cpr?: string;
  membershipStatus: string;
  subscriptionType: string;
  joinDate: string;
  invoices: { date: string; amount: number; status: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private members: Member[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Active',
      subscriptionType: 'Annual',
      joinDate: '2019-03-10',
      invoices: [
        { date: '2022-03-10', amount: 150, status: 'Paid' },
        { date: '2023-03-10', amount: 150, status: 'Paid' },
        { date: '2024-03-10', amount: 150, status: 'Pending' },
      ],
    },
    {
      id: 2,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Active',
      subscriptionType: 'Monthly',
      joinDate: '2021-11-20',
      invoices: [
        { date: '2023-11-20', amount: 15, status: 'Paid' },
        { date: '2023-12-20', amount: 15, status: 'Paid' },
        { date: '2024-01-20', amount: 15, status: 'Pending' },
      ],
    },
    {
      id: 3,
      name: 'Laura Wilson',
      email: 'laura.wilson@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Suspended',
      subscriptionType: 'Annual',
      joinDate: '2020-07-05',
      invoices: [
        { date: '2022-07-05', amount: 120, status: 'Paid' },
        { date: '2023-07-05', amount: 120, status: 'Pending' },
      ],
    },
    {
      id: 4,
      name: 'David Lee',
      email: 'david.lee@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Active',
      subscriptionType: 'Monthly',
      joinDate: '2022-01-15',
      invoices: [
        { date: '2023-10-15', amount: 20, status: 'Paid' },
        { date: '2023-11-15', amount: 20, status: 'Paid' },
        { date: '2023-12-15', amount: 20, status: 'Pending' },
      ],
    },
    {
      id: 5,
      name: 'Sophia Martinez',
      email: 'sophia.martinez@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Inactive',
      subscriptionType: 'Annual',
      joinDate: '2018-09-22',
      invoices: [
        { date: '2021-09-22', amount: 200, status: 'Paid' },
        { date: '2022-09-22', amount: 200, status: 'Paid' },
        { date: '2023-09-22', amount: 200, status: 'Pending' },
      ],
    },
    {
      id: 6,
      name: 'James Anderson',
      email: 'james.anderson@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Active',
      subscriptionType: 'Monthly',
      joinDate: '2021-06-30',
      invoices: [
        { date: '2023-08-30', amount: 25, status: 'Paid' },
        { date: '2023-09-30', amount: 25, status: 'Paid' },
        { date: '2023-10-30', amount: 25, status: 'Paid' },
        { date: '2023-11-30', amount: 25, status: 'Pending' },
      ],
    },
    {
      id: 7,
      name: 'Emma Garcia',
      email: 'emma.garcia@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Inactive',
      subscriptionType: 'Annual',
      joinDate: '2020-02-28',
      invoices: [
        { date: '2022-02-28', amount: 180, status: 'Paid' },
        { date: '2023-02-28', amount: 180, status: 'Paid' },
      ],
    },
    {
      id: 8,
      name: 'Oliver Harris',
      email: 'oliver.harris@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Suspended',
      subscriptionType: 'Monthly',
      joinDate: '2021-03-12',
      invoices: [
        { date: '2023-09-12', amount: 30, status: 'Paid' },
        { date: '2023-10-12', amount: 30, status: 'Unpaid' },
      ],
    },
    {
      id: 9,
      name: 'Charlotte Clark',
      email: 'charlotte.clark@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Active',
      subscriptionType: 'Monthly',
      joinDate: '2022-06-18',
      invoices: [
        { date: '2023-06-18', amount: 12, status: 'Paid' },
        { date: '2023-07-18', amount: 12, status: 'Paid' },
        { date: '2023-08-18', amount: 12, status: 'Paid' },
      ],
    },
    {
      id: 10,
      name: 'Liam Robinson',
      email: 'liam.robinson@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield, IL 62701',
      cpr: '123456-7890',
      membershipStatus: 'Inactive',
      subscriptionType: 'Annual',
      joinDate: '2017-12-01',
      invoices: [
        { date: '2021-12-01', amount: 250, status: 'Paid' },
        { date: '2022-12-01', amount: 250, status: 'Paid' },
        { date: '2023-12-01', amount: 250, status: 'Pending' },
      ],
    },
  ];

  constructor() {}

  getMembers(): Member[] {
    console.log('Fetching members'); // Add this line
    return this.members;
  }

  getMemberById(id: number): Member | undefined {
    console.log('Fetching member with ID:', id); // Add this line
    return this.members.find((member) => member.id === id);
  }
}
