/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	name: 'ilyes hammadi',
	role: 'Web Developer',
	contacts: {
		mobile: "000111222",
		email: 'hammadiilyesahmed@gmail.com',
		github: 'Ilyes-Hammadi',
		twitter: '@hammadiilyes',
		location: 'Gdyel, Oran, Algeria'
	},
	biopic: '',
	pictureURL: 'images/fry.jpg',
	welcomeMessage: 'Hello World',
	skills: ['Python', 'Javascript']
}

var education = {
	schools: [{
		name: 'University of Ahmed Ben Bella 1',
		city: 'Oran, Algeria',
		location: 'Senia, Oran, Algeria',
		degree: 'Bachelor',
		majors: ['CS'],
		dates: '2014 - 2017'
	}],
	onlineCourses: [{
		title: 'Full Web Stack Nanodegree',
		school: 'Udacity',
		dates: 'May 2016 - July 2016',
		url: ''
	}]
}


var work = {
	jobs: [{
		employer: 'Nomisma',
		title: 'Junior Full Stack Web',
		location: 'Oran, Algeria',
		dates: 'May 2016 - August 2016',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus architecto autem temporibus in placeat provident accusantium fuga nisi dolor magni, illo ipsa accusamus et molestias perspiciatis labore quo impedit veniam.'
	}]
}

var projects = {
	projects: [{
			title: 'Awesome Project',
			dates: '2017 - 2017',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus architecto autem temporibus in placeat provident accusantium fuga nisi dolor magni, illo ipsa accusamus et molestias perspiciatis labore quo impedit veniam.',
			images: [
				'http://placekitten.com/200/150',
				'http://placekitten.com/g/200/150',
			]
		},
		{
			title: 'Awesome Project',
			dates: '2017 - 2017',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus architecto autem temporibus in placeat provident accusantium fuga nisi dolor magni, illo ipsa accusamus et molestias perspiciatis labore quo impedit veniam.',
			images: [
				'http://placekitten.com/g/220/150',
				'http://placekitten.com/201/150',
				'http://placekitten.com/g/203/150',
			]
		}
	]
}

const data = "%data%"

// Projects section
bio.display = function () {
	$('#topContacts')
		.before(HTMLheaderName.replace(data, bio.name))
		.before(HTMLheaderRole.replace(data, bio.role))
		.after(HTMLbioPic.replace(data, bio.pictureURL))

	$('#topContacts, #footerContacts')
		.append(HTMLemail.replace(data, bio.contacts.email))
		.append(HTMLmobile.replace(data, bio.contacts.mobile))
		.append(HTMLlocation.replace(data, bio.contacts.location))
		.append(HTMLgithub.replace(data, bio.contacts.github))

	// If there a skills add theme to the header section
	$('#header').append(HTMLskillsStart)
	if (bio.skills.length > 0) {
		for (let i of bio.skills) {
			$('#skills').append(HTMLskills.replace(data, i))
		}
	}


}

projects.display = function () {
	projects.projects.forEach(function (project) {
		// Create an entry for the project
		$('#projects').append(HTMLprojectStart);

		// Append the project data to the project entry
		$('.project-entry:last')
			.append(HTMLprojectTitle.replace(data, project.title))
			.append(HTMLprojectDates.replace(data, project.dates))
			.append(HTMLprojectDescription.replace(data, project.description))

		// If there imahe for this project
		if (project.images.length > 0) {
			project.images.forEach(function (img) {
				$('.project-entry:last').append(HTMLprojectImage.replace(data, img))
			})
		}
	})
}

work.display = function () {
	// Add the jobs
	$('#workExperience').append(HTMLworkStart)
	work.jobs.forEach(function (job) {
		$('.work-entry:last').append(HTMLworkEmployer.replace(data, job.employer))
			.append(HTMLworkDates.replace(data, job.dates))
			.append(HTMLworkLocation.replace(data, job.location))
			.append(HTMLworkDescription.replace(data, job.description))

		$('.work-entry:last a').append(HTMLworkTitle.replace(data, job.title))
	})
}

education.display = function () {
	'use strict';
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {

		// start the HTML
		education.schools.forEach(function (edu) {

			$("#education").append(HTMLschoolStart);

			$(".education-entry:last")
				.append(HTMLschoolName.replace(data, edu.name))
				.append(HTMLschoolDates.replace(data, edu.dates))
				.append(HTMLschoolLocation.replace(data, edu.location))

			// Append degree to schoola name
			$(".education-entry:last a").append(HTMLschoolDegree.replace(data, edu.degree));

			edu.majors.forEach(function (major) {
				$(".education-entry:last").append(HTMLschoolMajor.replace(data, edu.majors))
			})
		});

		// start the HTML
		$('#education').append(HTMLonlineStart);
		$(".online-entry:last").append(HTMLonlineClasses);

		education.onlineCourses.forEach(function (edu) {
			$(".online-entry:last").append(HTMLonlineTitle.replace(data, edu.title));
			$(".online-entry:last").append(HTMLonlineDates.replace(data, edu.dates));

			// Append school to degree title
			$(".online-entry:last a").append(HTMLonlineSchool.replace(data, edu.school));

		});
	}
}

// Display the sections
bio.display()
projects.display()
work.display()
education.display()


// Adding a map
$('#mapDiv').append(googleMap);
