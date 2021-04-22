import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicDropDownService {
  // tslint:disable-next-line: ban-types
  public documentData: Object[] = [
    { Id: 'Essay', Document: 'Essay' },
    { Id: 'Term Paper', Document: 'Term Paper' },
    { Id: 'Research Paper', Document: 'Research Paper' },
    { Id: 'Course Work', Document: 'Course Work' },
    { Id: 'Book Report', Document: 'Book Report' },
    { Id: 'Final Year Project', Document: 'Final Year Project' },
    {
      Id: 'Practicum/Industrial Attachment Report',
      Document: 'Practicum/Industrial Attachment Report',
    },
    { Id: 'Finite Element Analysis', Document: 'Finite Element Analysis' },
    { Id: 'Abaqus Assignment', Document: 'Abaqus Assignment' },
    { Id: 'Solidworks Assignment', Document: 'Solidworks Assignment' },
    { Id: 'CES Edupark Assignment', Document: 'CES Edupark Assignment' },
    {
      Id: 'Autodesk Inventor Assignment',
      Document: 'Autodesk Inventor Assignment',
    },
    { Id: 'Others', Document: 'Others..' },
  ];

  // tslint:disable-next-line: ban-types
  public subjectData: Object[] = [
    { Id: 'Marketing', Subject: 'Marketing' },
    { Id: 'Nursing', Subject: 'Nursing' },
    { Id: 'Psychology', Subject: 'Psychology' },
    { Id: 'HealthCare', Subject: 'HealthCare' },
    { Id: 'BusinessStudies', Subject: 'Business Studies' },
    { Id: 'Management', Subject: 'Management' },
    { Id: 'English', Subject: 'English' },
    { Id: 'Philosophy', Subject: 'Philosophy' },
    { Id: 'Chemistry', Subject: 'Chemistry' },
    { Id: 'Math', Subject: 'Math' },
    { Id: 'Physics', Subject: 'Physics' },
    { Id: 'InformationTechnology', Subject: 'Information Technology' },
  ];
  // tslint:disable-next-line: ban-types
  public NumberOfWordsData: Object[] = [
    {
      Id: '1 page/approx 275 words',
      NumberOfWords: '1 page/approx 275 words',
    },
    {
      Id: '2 pages/approx 550 words',
      NumberOfWords: '2 pages/approx 550 words',
    },
    {
      Id: '3 pages/approx 825 words',
      NumberOfWords: '3 pages/approx 825  words',
    },
    {
      Id: '4 pages/approx 1,100 words',
      NumberOfWords: '4 pages/approx 1,100 words',
    },
    {
      Id: '5 pages/approx 1,375 words',
      NumberOfWords: '5 pages/approx 1,375 words',
    },
    {
      Id: '6 pages/approx 1,650 words',
      NumberOfWords: '6 pages/approx 1,650 words',
    },
    {
      Id: '7 pages/approx 1,925 words',
      NumberOfWords: '7 pages/approx 1,925 words',
    },
    {
      Id: '8 pages/approx 2,200 words',
      NumberOfWords: '8 pages/approx 2,200 words',
    },
    {
      Id: '9 pages/approx 2,475 words',
      NumberOfWords: '9 pages/approx 2,475 words',
    },
    {
      Id: '10 pages/approx 2,750 words',
      NumberOfWords: '10 pages/approx 2,750 words',
    },
    {
      Id: '11 pages/approx 3,025 words',
      NumberOfWords: '11 pages/approx 3,025 words',
    },
    {
      Id: '12 pages/approx 3,300 words',
      NumberOfWords: '12 pages/approx 3,300 words',
    },
    {
      Id: '13 pages/approx 3,575 words',
      NumberOfWords: '13 pages/approx 3,575 words',
    },
    {
      Id: '14 pages/approx 3,850 words',
      NumberOfWords: '14 pages/approx 3,850 words',
    },
    {
      Id: '15 pages/approx 4,125 words',
      NumberOfWords: '15 pages/approx 4,125 words',
    },
    {
      Id: '16 pages/approx 4,400 words',
      NumberOfWords: '16 pages/approx 4,400 words',
    },
    {
      Id: '17 pages/approx 4,675 words',
      NumberOfWords: '17 pages/approx 4,675 words',
    },
    {
      Id: '18 pages/approx 4,950 words',
      NumberOfWords: '18 pages/approx 4,950 words',
    },
    {
      Id: '19 pages/approx 5,225 words',
      NumberOfWords: '19 pages/approx 5,225 words',
    },
    {
      Id: '20 pages/approx 5,500 words',
      NumberOfWords: '20 pages/approx 5,500 words',
    },
    {
      Id: '21 pages/approx 5,775 words',
      NumberOfWords: '21 pages/approx 5,775 words',
    },
    {
      Id: '22 pages/approx 6,050 words',
      NumberOfWords: '22 pages/approx 6,050 words',
    },
    {
      Id: '23 pages/approx 6,325 words',
      NumberOfWords: '23 pages/approx 6,325 words',
    },
    {
      Id: '24 pages/approx 6,600 words',
      NumberOfWords: '24 pages/approx 6,600 words',
    },
    {
      Id: '25 pages/approx 6,875 words',
      NumberOfWords: '25 pages/approx 6,875 words',
    },
    {
      Id: '26 pages/approx 7,150 words',
      NumberOfWords: '26 pages/approx 7,150 words',
    },
    {
      Id: '27 pages/approx 7,425 words',
      NumberOfWords: '27 pages/approx 7,425 words',
    },
    {
      Id: '28 pages/approx 7,700 words',
      NumberOfWords: '28 pages/approx 7,700 words',
    },
    {
      Id: '29 pages/approx 7,975 words',
      NumberOfWords: '29 pages/approx 7,975 words',
    },
    {
      Id: '30 pages/approx 8,250 words',
      NumberOfWords: '30 pages/approx 8,250 words',
    },
    {
      Id: '31 pages/approx 8,525 words',
      NumberOfWords: '31 pages/approx 8,525 words',
    },
    {
      Id: '32 pages/approx 8,800 words',
      NumberOfWords: '32 pages/approx 8,800 words',
    },
    {
      Id: '33 pages/approx 9,075 words',
      NumberOfWords: '33 pages/approx 9,075 words',
    },
    {
      Id: '34 pages/approx 9,350 words',
      NumberOfWords: '34 pages/approx 9,350 words',
    },
    {
      Id: '35 pages/approx 9,625 words',
      NumberOfWords: '35 pages/approx 9,625 words',
    },
    {
      Id: '36 pages/approx 9,900 words',
      NumberOfWords: '37 pages/approx 9,900 words',
    },
    {
      Id: '37 pages/approx 10,175 words',
      NumberOfWords: '37 pages/approx 10,175 words',
    },
    {
      Id: '38 pages/approx 10,450 words',
      NumberOfWords: '38 pages/approx 10,450 words',
    },
    {
      Id: '39 pages/approx 10,725 words',
      NumberOfWords: '39 pages/approx 10,725 words',
    },
    {
      Id: '40 pages/approx 11,000 words',
      NumberOfWords: '40 pages/approx 11,000 words',
    },
    {
      Id: '41 pages/approx 11,275 words',
      NumberOfWords: '41 pages/approx 11,275 words',
    },
    {
      Id: '42 pages/approx 11,550 words',
      NumberOfWords: '42 pages/approx 11,550 words',
    },
    {
      Id: '43 pages/approx 11,825 words',
      NumberOfWords: '43 pages/approx 11,825 words',
    },
    {
      Id: '44 pages/approx 12,100 words',
      NumberOfWords: '44 pages/approx 12,100 words',
    },
    {
      Id: '45 pages/approx 12,375 words',
      NumberOfWords: '45 pages/approx 12,375 words',
    },
    {
      Id: '46 pages/approx 12,650 words',
      NumberOfWords: '46 pages/approx 12,650 words',
    },
    {
      Id: '47 pages/approx 12,925 words',
      NumberOfWords: '47 pages/approx 12,925 words',
    },
    {
      Id: '48 pages/approx 13,200 words',
      NumberOfWords: '48 pages/approx 13,200 words',
    },
    {
      Id: '49 pages/approx 13,475 words',
      NumberOfWords: '49 pages/approx 13,475 words',
    },
    {
      Id: '50 pages/approx 13,750 words',
      NumberOfWords: '50 pages/approx 13,750 words',
    },
    {
      Id: '51 pages/approx 14,025 words',
      NumberOfWords: '51 pages/approx 14,025 words',
    },
    {
      Id: '52 pages/approx 14,300 words',
      NumberOfWords: '52 pages/approx 14,300 words',
    },
    {
      Id: '53 pages/approx 14,575 words',
      NumberOfWords: '53 pages/approx 14,575 words',
    },
    {
      Id: '54 pages/approx 14,850 words',
      NumberOfWords: '54 pages/approx 14,850 words',
    },
    {
      Id: '55 pages/approx 15,125 words',
      NumberOfWords: '55 pages/approx 15,125 words',
    },
    {
      Id: '56 pages/approx 15,400 words',
      NumberOfWords: '56 pages/approx 15,400 words',
    },
    {
      Id: '57 pages/approx 15,675 words',
      NumberOfWords: '57 pages/approx 15,675 words',
    },
    {
      Id: '58 pages/approx 15,950 words',
      NumberOfWords: '58 pages/approx 15,950 words',
    },
    {
      Id: '60 pages/approx 16,225 words',
      NumberOfWords: '60 pages/approx 16,225 words',
    },
    {
      Id: '60 pages/approx 16,500 words',
      NumberOfWords: '60 pages/approx 16,500 words',
    },
  ];

  // tslint:disable-next-line: ban-types
  public UrgencyData: Object[] = [
    { Id: '3 Hours', Urgency: '3 Hours' },
    { Id: '6 Hours', Urgency: '6 Hours' },
    { Id: '10 Hours', Urgency: '10 Hours' },
    { Id: '18 Hours', Urgency: '18 Hours' },
    { Id: '24 Hours', Urgency: '24 Hours' },
    { Id: '35 Hours', Urgency: '35 Hours' },
    { Id: '2 Days', Urgency: '2 Days' },
    { Id: '3 Days', Urgency: '3 Days' },
    { Id: '4 days', Urgency: '4 days' },
    { Id: '1 week', Urgency: '1 week' },
    { Id: '2 weeks', Urgency: '2 weeks' },
    { Id: '1 Month', Urgency: '1 Month' }
  ];

  // tslint:disable-next-line: ban-types
  public AcademicLevelData: Object[] = [
    { Id: 'HighSchool', AcademicLevel: 'HighSchool' },
    { Id: 'UnderGraduate', AcademicLevel: 'UnderGraduate' },
    { Id: 'Graduate', AcademicLevel: 'Graduate' },
    { Id: 'Phd', AcademicLevel: 'Phd' },
  ];

  // tslint:disable-next-line: ban-types
  public StyleData: Object[] = [
    { Id: 'APA', Style: 'APA' },
    { Id: 'MLA', Style: 'MLA' },
    { Id: 'TURABIAN', Style: 'TURABIAN' },
    { Id: 'CHICAGO', Style: 'CHICAGO' },
    { Id: 'HAVARD', Style: 'HAVARD' },
    { Id: 'OXFORD', Style: 'OXFORD' },
    { Id: 'VANCOUVER', Style: 'VANCOUVER' },
    { Id: 'CBE', Style: 'CBE' },
    { Id: 'OTHERS', Style: 'OTHERS' },
  ];

  // tslint:disable-next-line: ban-types
  public CurrencyData: Object[] = [
    { Id: 'USD', Currency: 'USD' },
    { Id: 'GBA', Currency: 'GBA' },
    { Id: 'CAD', Currency: 'CAD' },
    { Id: 'AUD', Currency: 'AUD' },
    { Id: 'EUR', Currency: 'EUR' },
  ];
   // tslint:disable-next-line: ban-types
  public LanguageData: Object[] = [
    { Id: 'English (U.K)', Language: 'English (U.K)' },
    { Id: 'English (U.S)', Language: 'English (U.S)' },
    { Id: 'Australia (A.U)', Language: 'Australia (A.U)' },
  ];
  constructor() {}
}

