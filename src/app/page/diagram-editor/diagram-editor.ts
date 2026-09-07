import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diagram-editor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './diagram-editor.html',
  styleUrl: './diagram-editor.css',
})
export class DiagramEditor {
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;
  previewUrl: string | null = null;
  fileName = 'use_case_v1.png';
  lastModified = '2 mins ago';
  saved = false;

  openFilePicker(): void {
    this.fileInput?.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.fileName = file.name;
    this.lastModified = 'Just now';
    this.saved = false;
    const reader = new FileReader();
    reader.onload = () => (this.previewUrl = reader.result as string);
    reader.readAsDataURL(file);
  }

  async openFullscreen(): Promise<void> {
    const preview = document.querySelector('.diagram-preview');
    if (preview instanceof HTMLElement && preview.requestFullscreen) {
      await preview.requestFullscreen();
    }
  }

  saveChanges(): void {
    this.saved = true;
  }
}
