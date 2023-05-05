function hide_other_events(event_id) {
    let event_details = document.querySelectorAll("#event_details > details")
    for (let i = 0; i < event_details.length; i++) {
        let el = event_details[i];
        if (el.id != event_id) {
            el.open = false;
        }
    }
}
function show_event_details(event_id) {
    hide_other_events(event_id)
    let details_element = document.getElementById(event_id);
    details_element.open = true;
    details_element.scrollIntoView({behavior: "smooth", block: "center"})
}

function add_event_handlers() {
    let event_details = document.querySelectorAll("#event_details > details")
    for (let i = 0; i < event_details.length; i++) {
        let el = event_details[i];
        el.addEventListener("click", function (e) {
            hide_other_events(this.id);
        })
    }
}
window.addEventListener("load", add_event_handlers);