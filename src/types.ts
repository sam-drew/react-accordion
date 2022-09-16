// Define the Accordion Data type.
// Accordion items have a title (shown even when it's closed) and content.
// The content is a string that can be run through a Markdown processor.
export type AccordionDataItem = {
    title: string,
    content: string
}