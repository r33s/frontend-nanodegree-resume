var name = "Randy Rees";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "The Man";
var formattedRole = HTMLheaderRole.replace("%data%",role);
var bio = {
	"name": "Randy Rees",
	"role": "Capacity Planning Manager/Web Developer",
	"contactinfo": {
		"mobile": "440-555-5555",
		"email": "randy@r33s.com",
		"github": "r33s",
		"twitter": "@drfilips",
		"location": "Cleveland"
	},
	"bioPic": "images/biopic1.jpg",
	"welcomeMessage" : "Greetings new employer!",
	"skills": [
	"project management", "programming", "web development", "networking"
	]
}
var formattedMobile = HTMLmobile.replace("%data%",bio.contactinfo.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contactinfo.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contactinfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contactinfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contactinfo.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);


$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
console.log(formattedMobile);

if(bio.skills != 0){
	$("#header").append(HTMLskillsStart);
	for(var i=0; i!=bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}

var work = {
	"jobs": [
		{
		"employer": "Ameritech/SBC/at&t",
		"title": "technician",
		"dates": "June 2000 - February 2012",
		"location": "Cleveland, OH",
		"description": "Performed multiple jobs as a technician for Ameritech, SBC, & AT&T. Construction Lineman, Copper/Fiber Splicer, Facilities specialist in the MLAC, Cable locator, Cable Repairman, and DSL installer."
		},
		{
		"employer": "at&t",
		"title": "Capacity Planning Manager",
		"dates": " February 2012 - present",
		"location": "Cleveland, OH",
		"description": "Project manager of several large scale initiatives including FTB, ASE, and FTTP. Responsible for the facilities within 10 wire centers in the Cleveland area. This includes equipment, fiber, and copper cables."
		},
		{
		"employer": "Procare Vision Center",
		"title": "Owner/Web Master/Network Administrator",
		"dates": "November 2009 - present",
		"location": "Berea, OH",
		"description": "Help my wife run a successful optometry practice. Responsible for the web site and all IT issues including securiy and hardware. Also involved in all personnel desicions."
		}
	]
	
}

var education = {
	"schools": [
		{
			"name": "Cleveland State University",
			"location": "Cleveland, OH",
			"degree": "MS",
			"majors": ["Electrical Engineering - Focus in Computer Engineering"],
			"date": 2013,
			"url": "http://www.csuohio.edu/engineering"
		},
		{
			"name": "Cleveland State University",
			"location": "Cleveland, OH",
			"degree": "BS",
			"majors": ["Electrical Engineering Technology"],
			"date": 2012 + " - Summa Cum Laude",
			"url": "http://www.csuohio.edu/engineering"
		},
		{
			"name": "Udacity",
			"location": "Olmsted Falls, OH",
			"degree": "Nanodegree",
			"majors": "Front-End Web Developer",
			"date": "In progress - expected late Spring 2015",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
}

var certification = {
	"certs": [
		{
			"title": "Cisco Certified Network Associate - CCNA",
			"institute": "Cisco",
			"id": "CSCO12473485",
			"date": "Expires: September 19, 2016",
			"image": "images/cisco.jpg",
		},
		{
			"title": "Security+",
			"institute": "CompTIA",
			"id": "COMP001020305215",
			"date": "Expires: May 23, 2016",
			"image": "images/security.jpg",
		},
		{
			"title": "Network+",
			"institute": "CompTIA",
			"id": "COMP001020305215",
			"date": "Expires: May 23, 2016",
			"image": "images/network.jpg",
		},
		{
			"title": "A+",
			"institute": "CompTIA",
			"id": "COMP001020305215",
			"date": "Expires: May 23, 2016",
			"image": "images/a.jpg",
		},
		{
			"title": "Six Sigma Green Belt",
			"institute": "at&t",
			"id": "",
			"date": "Certified November 15, 2013",
			"image": "images/gbelt.jpg",
		}
	]
	
}

var projects = {
	"projects": [
		{
		"title": "Interactive Resume",
		"dates": 2014,
		"description": "Create an interactive website using JavaScript.",
		"images": [""]
		},
		{
		"title": "Mockup to Website",
		"dates": 2014,
		"description": "Duplicate a website design and layout based of a PDF document.",
		"images": ["images/page-mock.png"]
		}
	]
}

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

function displayEducation(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolInfo = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolInfo);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		//var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		//$(".education-entry:last").append(formattedSchoolURL);
		$(".education-entry:last").append(formattedSchoolMajor);
		}

	/*if(education.certs != 0){
		$(".education-entry:last").append(HTMLcertClasses);
		for(cert in education.certs){
			var formattedCertTitle = HTMLcertTitle.replace("%data%",education.certs[cert].title);
			var formattedCertInstitute = HTMLcertInstitute.replace("%data%",education.certs[cert].institute);
			var formattedInstituteTitle = formattedCertInstitute + formattedCertTitle;
			$(".education-entry:last").append(formattedInstituteTitle);
			var formattedCertDate = HTMLcertDate.replace("%data%", education.certs[cert].date);
			//var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedCertID = HTMLcertID.replace("%data%", education.certs[cert].id);
			$(".education-entry:last").append(formattedCertDate);
			$(".education-entry:last").append(formattedCertID);
		}
	}*/
}

function displayCerts(){
	for(cert in certification.certs){
		$("#cert").append(HTMLcertStart);
		var formattedCertTitle = HTMLcertTitle.replace("%data%",certification.certs[cert].title);
		var formattedCertInstitute = HTMLcertInstitute.replace("%data%",certification.certs[cert].institute);
		var formattedInstituteTitle = formattedCertInstitute + formattedCertTitle;
		$(".cert-entry:last").append(formattedInstituteTitle);
		var formattedCertDate = HTMLcertDate.replace("%data%", certification.certs[cert].date);
		var formattedCertImage = HTMLcertImage.replace("%data%", certification.certs[cert].image);
		
		//var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		//var i = certification.certs.length;
		//console.log(i);
		//if(certification.certs[cert].id!="5"){
		//	console.log(certification.certs[cert].id);
			var formattedCertID = HTMLcertID.replace("%data%", certification.certs[cert].id);
		//var formattedCertSpace = 
		//	console.log(certification.certs[cert].id);
		//}
		//console.log(i);
		$(".cert-entry:last").append(formattedCertDate);
		console.log(formattedCertID);
		if(formattedCertID!='<em><br>Career ID: </em>'){
			$(".cert-entry:last").append(formattedCertID);
		}
		else{
			
			$(".cert-entry:last").append('<em><br> </em>');
		}
		$(".cert-entry:last").append(formattedCertImage);
		}
}

displayWork();
displayEducation();
displayCerts();

projects.display = function() {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

inName(name);

function inName(headerName) {
    var internationalName = headerName;
    var space = ' ';
    var names = internationalName.split(space);
    var lastName = names.pop();
    lastName = lastName.toUpperCase();
    var firstName = names.pop();
    firstName = firstName.toLowerCase();
    var lengthFname = firstName.length;
    var unit = 1-lengthFname;
    var endFname = firstName.slice(1);
    var firstLetter = firstName.slice(0,unit);
    firstLetter = firstLetter.toUpperCase();
    internationalName = firstLetter + endFname + ' ' + lastName;
    return internationalName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
