// models/Biodata.js
const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   auto: true,
  // },
  generalInfo: {
    bioDataId: {
      type: String,
      unique: true, // ensures uniqueness
      index: true,  // makes it searchable
    },
    biodataType: String,
    maritalStatus: String,
    birthYear: String,
    height: String,
    complexion: String,
    weight: String,
    bloodGroup: String,
    nationality: String,
  },

  educationDetails: {
    educationMethod: String,
    highestQualification: String,
    sscYear: String,
    sscGroup: String,
    sscResult: String,
    postSscMedium: String,
    hscYear: String,
    hscGroup: String,
    hscResult: String,
    graduationSubject: String,
    institution: String,
    graduationYear: String,
    otherQualifications: String,
    islamicTitles: String,
  },

  expectedPartner: {
    age: Number,
    complexion: String,
    height: String,
    education: String,
    profession: String,
    maritalStatus: String,
    financialCondition: String,
    district: String,
    expectedQualities: String,
  },

  familyDetails: {
    fatherName: String,
    fatherAlive: String,
    fatherProfession: String,
    motherName: String,
    motherAlive: String,
    motherProfession: String,
    brothersCount: String,
    brothersInfo: String,
    sistersCount: String,
    unclesProfession: String,
    financialStatus: String,
    financialDescription: String,
    religiousCondition: String,
  },

  marriageRelatedInfo: {
    guardiansConsent: String,
    willingToWork: String,
    continueStudies: String,
    continueJob: String,
    marriageThoughts: String,
  },

  occupationIncome: {
    occupation: String,
    professionDescription: String,
    monthlyIncome: String,
  },

  pledge: {
    parentConsent: String,
    truthPledge: String,
    falseInfoAgreement: String,
  },

  personalInfo: {
    clothesOutside: String,
    niqabSince: String,
    beardSince: String,
    prayerRoutine: String,
    missedPrayers: String,
    mahramCompliance: String,
    quranRecitation: String,
    fiqh: String,
    entertainment: String,
    mentalPhysical: String,
    deenWork: String,
    shrineBelief: String,
    islamicBooks: String,
    islamicScholars: String,
    applicableCategory: String,
    hobbies: String,
    mobileNumber: String,
  },

  address: {
    permanentAddress: String,
    permanentArea: String,
    presentAddress: String,
    presentArea: String,
    grewUp: String,
    sameAsPermanent: Boolean,
  },

  contact: {
    brideName: String,
    groomName: String,
    guardianMobile: String,
    guardianRelation: String,
    email: String,
  },
  email:String,
  

}, { timestamps: true });

// Automatically set email before saving if not provided
biodataSchema.pre('save', function (next) {
  if (!this.email) {
    this.email = this.contact.email;
  }
  next();
});

const Biodatas = mongoose.model("Biodatas", biodataSchema);
module.exports = Biodatas;
