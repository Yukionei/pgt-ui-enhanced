// Event listeners for button clicks
document.getElementById("new-design-button").addEventListener("click", generateNewDesign);
document.getElementById("revise-design-button").addEventListener("click", reviseDesign);
document.getElementById("bulk-approve-button").addEventListener("click", bulkApproveDesigns);
document.getElementById("archive-design-button").addEventListener("click", archiveDesign);
document.getElementById("suggest-design-button").addEventListener("click", suggestDesign);
document.getElementById("create-etsy-button").addEventListener("click", createEtsyListing);
document.getElementById("license-tier-button").addEventListener("click", chooseLicenseTier);

// Functions to handle button actions
function generateNewDesign() {
    let designs = [
        "Design 1: Minimalist geometric wall art.",
        "Design 2: Abstract boho art.",
        "Design 3: Modern black and white line art.",
        "Design 4: Watercolor botanical prints."
    ];
    displayOutput(designs.join("<br>"));
}

function reviseDesign() {
    displayOutput("You can revise a design by selecting options like changing color or adding textures.");
}

function bulkApproveDesigns() {
    displayOutput("All designs have been approved and processed.");
}

function archiveDesign() {
    displayOutput("The selected design has been archived for future use.");
}

function suggestDesign() {
    let suggestions = [
        "Floral illustrations for nursery decor.",
        "Typographic wall art with motivational quotes.",
        "Vintage-inspired botanical prints."
    ];
    displayOutput(suggestions.join("<br>"));
}

function createEtsyListing() {
    displayOutput("Draft Etsy listing created with SEO tags: 'minimalist, abstract, geometric, digital download'.");
}

function chooseLicenseTier() {
    displayOutput("License tiers available: Personal Use, Commercial Use.");
}

// Helper function to display output in the UI
function displayOutput(content) {
    document.getElementById("design-output").innerHTML = content;
}