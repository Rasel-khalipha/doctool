// Mobile menu toggle
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
	document.getElementById("mainNav").classList.toggle("active");
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// File upload handlers
document
	.getElementById("image-upload")
	.addEventListener("change", function (e) {
		if (e.target.files.length > 0) {
			document.getElementById(
				"selected-image"
			).textContent = `Selected: ${e.target.files[0].name}`;
			document.getElementById("selected-image").style.display = "block";
		}
	});

document
	.getElementById("bg-remove-upload")
	.addEventListener("change", function (e) {
		if (e.target.files.length > 0) {
			document.getElementById(
				"selected-bg-image"
			).textContent = `Selected: ${e.target.files[0].name}`;
			document.getElementById("selected-bg-image").style.display = "block";
		}
	});

document
	.getElementById("pdf-to-word-upload")
	.addEventListener("change", function (e) {
		if (e.target.files.length > 0) {
			document.getElementById(
				"selected-pdf-file"
			).textContent = `Selected: ${e.target.files[0].name}`;
			document.getElementById("selected-pdf-file").style.display = "block";
		}
	});

document
	.getElementById("word-to-pdf-upload")
	.addEventListener("change", function (e) {
		if (e.target.files.length > 0) {
			document.getElementById(
				"selected-word-file"
			).textContent = `Selected: ${e.target.files[0].name}`;
			document.getElementById("selected-word-file").style.display = "block";
		}
	});

// Tool functionality simulation
document.getElementById("compress-btn").addEventListener("click", function () {
	const fileInput = document.getElementById("image-upload");
	if (fileInput.files.length === 0) {
		alert("Please select an image file first");
		return;
	}

	const compressionLevel = document.getElementById("compression-level").value;
	const keepMetadata = document.getElementById("keep-metadata").checked;
	const resizeImage = document.getElementById("resize-image").checked;

	// Show loading spinner
	document.getElementById("compression-spinner").style.display = "block";

	// Simulate processing delay
	setTimeout(function () {
		// Hide spinner
		document.getElementById("compression-spinner").style.display = "none";

		// Show result (simulated)
		const originalSize = Math.floor(Math.random() * 5000) + 1000; // 1-6MB
		const reduction = compressionLevel / 2 + Math.random() * 20; // 35-70%
		const compressedSize = Math.floor((originalSize * (100 - reduction)) / 100);

		document.getElementById("original-size").textContent = `${Math.floor(
			originalSize / 1024
		)} KB`;
		document.getElementById("compressed-size").textContent = `${Math.floor(
			compressedSize / 1024
		)} KB`;
		document.getElementById("reduction-percent").textContent = `${Math.floor(
			reduction
		)}%`;

		document.getElementById("compression-result").style.display = "block";
	}, 2000);
});

document.getElementById("remove-bg-btn").addEventListener("click", function () {
	const fileInput = document.getElementById("bg-remove-upload");
	if (fileInput.files.length === 0) {
		alert("Please select an image file first");
		return;
	}

	const quality = document.getElementById("bg-removal-quality").value;
	const bgColor = document.getElementById("bg-color").value;

	// Show loading spinner
	document.getElementById("bg-remove-spinner").style.display = "block";

	// Simulate processing delay
	setTimeout(function () {
		// Hide spinner
		document.getElementById("bg-remove-spinner").style.display = "none";

		// Show result (simulated)
		const processingTime = (0.3 + Math.random() * 0.7).toFixed(1);

		document.getElementById(
			"processing-time"
		).textContent = `${processingTime}s`;
		document.getElementById("bg-remove-result").style.display = "block";
	}, 2500);
});

document
	.getElementById("convert-to-word-btn")
	.addEventListener("click", function () {
		const fileInput = document.getElementById("pdf-to-word-upload");
		if (fileInput.files.length === 0) {
			alert("Please select a PDF file first");
			return;
		}

		const format = document.getElementById("word-format").value;
		const preserveLayout = document.getElementById("preserve-layout").checked;
		const ocrEnabled = document.getElementById("ocr-enabled").checked;

		// Show loading spinner
		document.getElementById("pdf-to-word-spinner").style.display = "block";

		// Simulate processing delay
		setTimeout(function () {
			// Hide spinner
			document.getElementById("pdf-to-word-spinner").style.display = "none";

			// Show result (simulated)
			const pages = Math.floor(Math.random() * 20) + 1;
			const fileSize = Math.floor(Math.random() * 2000) + 500;

			document.getElementById("pdf-pages").textContent = pages;
			document.getElementById("word-file-size").textContent = `${fileSize} KB`;
			document.getElementById("pdf-to-word-result").style.display = "block";
		}, 3000);
	});

document
	.getElementById("convert-to-pdf-btn")
	.addEventListener("click", function () {
		const fileInput = document.getElementById("word-to-pdf-upload");
		if (fileInput.files.length === 0) {
			alert("Please select a Word file first");
			return;
		}

		const quality = document.getElementById("pdf-quality").value;
		const preserveLinks = document.getElementById("preserve-links").checked;
		const optimizePdf = document.getElementById("optimize-pdf").checked;

		// Show loading spinner
		document.getElementById("word-to-pdf-spinner").style.display = "block";

		// Simulate processing delay
		setTimeout(function () {
			// Hide spinner
			document.getElementById("word-to-pdf-spinner").style.display = "none";

			// Show result (simulated)
			const fileSize = Math.floor(Math.random() * 1500) + 300;
			let qualityLevel = "Medium";
			if (quality > 80) qualityLevel = "High";
			if (quality < 40) qualityLevel = "Low";

			document.getElementById("pdf-file-size").textContent = `${fileSize} KB`;
			document.getElementById("pdf-quality-level").textContent = qualityLevel;
			document.getElementById("word-to-pdf-result").style.display = "block";
		}, 2500);
	});

// Download button handlers (simulated)
document
	.getElementById("download-compressed")
	.addEventListener("click", function () {
		alert(
			"In a real implementation, this would download the compressed image file"
		);
	});

document
	.getElementById("download-bg-removed")
	.addEventListener("click", function () {
		alert(
			"In a real implementation, this would download the image with background removed"
		);
	});

document
	.getElementById("download-word-file")
	.addEventListener("click", function () {
		alert(
			"In a real implementation, this would download the converted Word file"
		);
	});

document
	.getElementById("download-pdf-file")
	.addEventListener("click", function () {
		alert(
			"In a real implementation, this would download the converted PDF file"
		);
	});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});

		// Close mobile menu if open
		document.getElementById("mainNav").classList.remove("active");
	});
});
