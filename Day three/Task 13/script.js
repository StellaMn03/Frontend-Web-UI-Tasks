const tabContents = {
    tab1: "Hello Tab 1",
    tab2: "Hello Tab 2",
    tab3: "Hello Tab 3"
};

function showTab(tabId) {
    const tabContentContainers = document.querySelectorAll('.tab-content');
    tabContentContainers.forEach(container => {
        if (container.id === tabId) {
            container.textContent = tabContents[tabId];
            container.style.display = 'block';
        } else {
            container.style.display = 'none';//եթե չգրենք բացելուց հետո չի փակվի
        }
    });

}
