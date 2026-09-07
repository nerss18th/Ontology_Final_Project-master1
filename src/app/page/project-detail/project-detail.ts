import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface UseCase {
  id: string;
  name: string;
  actor: string;
  description: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  activeSection = 'use-case';
  isEditing = false;
  projectName = 'Project 1';
  projectDescription =
    'System interactions for User Authentication and Account Management modules are currently being modeled.';

  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'User Login',
      actor: 'Member',
      description: 'Allows registered users to access their accounts.',
    },
    {
      id: 'UC-02',
      name: 'Update Profile',
      actor: 'User',
      description: 'Enables users to modify their personal information.',
    },
    {
      id: 'UC-03',
      name: 'Reset Password',
      actor: 'User, System',
      description: "Sends a recovery link to the user's registered email.",
    },
  ];

  setSection(section: string): void {
    this.activeSection = section;
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
  }

  deleteUseCase(index: number): void {
    this.useCases.splice(index, 1);
  }
}
