const example2 = new autoComplete({
    selector: "#example2",
    placeHolder: "Ask a question",
    data: {
        src: [
            "How to install Cork Admin",
            "File Structure",
            "How to use Gulp",
            "How to run Browser Sync",
            "Coding React",
            "React Frameworks",
            "Creative Photography",
            "Trending Style",
            "Changelog",
            "What's new in Cork",
            "Latest Tweet",
            "Latest Update",
            "Compilation Issue",
            "Sidebar not rendering CSS",
            "How to use app.js",
            "Layouts",
            "Grid System",
            "Raise Issue",
            "Mailing Info",
        ],
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                // Add class to the created element
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                // Append message element to the results list
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: {
            render: true
        }
    },
    events: {
        input: {
        focus() {
            if (example2.input.value.length) example2.start();
        },
        selection(event) {
            const feedback = event.detail;
            // Prepare User's Selected Value
            const selection = feedback.selection.value;
            
            // Replace Input value with the selected value
            example2.input.value = selection;
        },
        },
    },
});