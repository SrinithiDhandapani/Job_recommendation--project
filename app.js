// Example job data (replace with actual data fetched from backend)
const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Inc.', location: 'New York' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Corp.', location: 'San Francisco' },
    { id: 3, title: 'Full Stack Developer', company: '123 Tech', location: 'Seattle' },
];

// Function to display job listings
function displayJobListings() {
    const jobListings = document.getElementById('job-listings');

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <button onclick="applyForJob(${job.id})">Apply Now</button>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Function to simulate applying for a job
function applyForJob(jobId) {
    alert(`Applied for job with ID ${jobId}`);
}

// Display job listings when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayJobListings();
});
