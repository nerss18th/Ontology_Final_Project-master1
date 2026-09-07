import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface UseCase {
  id: string;
  name: string;
  actor: string;
  description: string;
  type: string;
}

const defaultUseCases: UseCase[] = [
  { id: 'UC-01', name: 'User Login', actor: 'Member', description: 'Allows registered users to access their accounts.', type: 'system' },
  { id: 'UC-02', name: 'Update Profile', actor: 'User', description: 'Enables users to modify their personal information.', type: 'business' },
  { id: 'UC-03', name: 'Reset Password', actor: 'User, System', description: "Sends a recovery link to the user's registered email.", type: 'system' },
];

@Component({
  selector: 'app-add-use-case',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-use-case.html',
  styleUrl: './add-use-case.css',
})
export class AddUseCase {
  readonly useCaseId = this.nextUseCaseId();
  useCaseType = 'system';
  useCaseName = '';
  actor = '';
  description = '';
  submitted = false;

  constructor(private router: Router) {}

  addUseCase(): void {
    this.submitted = true;
    if (!this.useCaseName.trim() || !this.actor.trim() || !this.description.trim()) return;

    const saved = localStorage.getItem('ontology-use-cases');
    const useCases = saved ? (JSON.parse(saved) as UseCase[]) : [...defaultUseCases];
    useCases.push({
      id: this.useCaseId,
      name: this.useCaseName.trim(),
      actor: this.actor.trim(),
      description: this.description.trim(),
      type: this.useCaseType,
    });
    localStorage.setItem('ontology-use-cases', JSON.stringify(useCases));
    this.router.navigate(['/dashboard/project/1']);
  }

  private nextUseCaseId(): string {
    const saved = localStorage.getItem('ontology-use-cases');
    const count = saved ? (JSON.parse(saved) as UseCase[]).length + 1 : defaultUseCases.length + 1;
    return `UC-${String(count).padStart(2, '0')}`;
  }
}
