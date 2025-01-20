import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/core/services/student/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  userForm: FormGroup;
  studImage: File | null = null;
  studResume: File | null = null;
  streamsList: string[] = [
    'COMPUTER_SCIENCE',
    'INFORMATION_TECHNOLOGY',
    'MECHANICAL',
    'ELECTRICAL',
    'CIVIL',
    'ELECTRONICS',
  ];
  uploadedImage = false;
  uploadedResume = false;
  @ViewChild('profileImage') profileImage: ElementRef | undefined;
  @ViewChild('studentResume') studentResume: ElementRef | undefined;
  studentId: number = 0;
  imagePreview: string | ArrayBuffer | null = null;
  existingImage: string | null = null;
  existingResume: string | null = null;
  isImgChanged = false;
  isResumeChanged = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.userForm = this.fb.group({
      registerNo: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      birthDate: ['', Validators.required],
      streams: ['', Validators.required],
      resume: [null, Validators.required], // Updated to accept file as null
      image: [null, Validators.required], // Updated to accept file as null
      profileSummary: [],
      skills: ['', Validators.required],
    });
  }

  // Handles file selection
  onFileSelect(event: Event, fileType: string) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput?.files?.length) {
      const file = fileInput.files[0];

      // Perform validation
      if (fileType === 'image' && !file.type.startsWith('image/')) {
        alert('Only image files are allowed.');
        fileInput.value = ''; // Clear the input
        return;
      }

      if (fileType === 'resume' && file.type !== 'application/pdf') {
        alert('Only PDF files are allowed.');
        fileInput.value = ''; // Clear the input
        return;
      }

      // Update the corresponding form control with the file
      this.userForm.patchValue({ [fileType]: file });
      this.userForm.get(fileType)?.updateValueAndValidity(); // Mark as dirty and validate

      // Optional: Provide UI feedback for upload success
      if (fileType === 'image') {
        this.uploadedImage = true;
        this.isImgChanged = true;
        this.existingImage = null;
        //this.profileImage!.nativeElement.innerText = file.name;
        this.studImage = (fileInput.files as FileList)[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        // reader.readAsDataURL(this.studImage);
      } else if (fileType === 'resume') {
        this.uploadedResume = true;
        this.isResumeChanged = true;
        //this.studentResume!.nativeElement.innerText = file.name;
        this.studResume = (fileInput.files as FileList)[0];
      }
    }
  }

  // Form submission
  onSubmit() {
    if (this.userForm.valid) {
      const formData = new FormData();

      formData.append('registerNo', this.userForm.value.registerNo);
      formData.append('fullName', this.userForm.value.fullName);
      formData.append('email', this.userForm.value.email);
      formData.append('mobile', this.userForm.value.mobile);
      formData.append('streams', this.userForm.value.streams);
      formData.append('birthDate', this.userForm.value.birthDate);
      formData.append('profileSummary', this.userForm.value.profileSummary);
      formData.append('skills', this.userForm.value.skills);

      formData.append('image', this.studImage as Blob);
      formData.append('resume', this.studResume as Blob);

      // Call the service method
      this.studentService.updateProfile(formData, this.studentId).subscribe({
        next: (response) => {
          console.log('Success:', response);
          alert('Student details updated successfully!');
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Failed to update student details.');
        },
      });
    } else {
      alert('Please fill out all required fields correctly!');
    }
  }

  getStudentData() {
    this.studentService.getProfile(this.studentId).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.userForm.patchValue(response);
        this.existingImage = `data:image/jpeg;base64,${this.userForm.value.image}`;
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Student Not Found');
      },
    });
  }

  ngOnInit() {
    const storedData = localStorage.getItem('student_Data');
    if (storedData) {
      this.studentId = JSON.parse(storedData).id;
    }

    this.getStudentData();
  }
}
