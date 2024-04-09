import { StaticImageData } from "next/image";
import image from "../../assests/events/Card Picture.png";

export interface Event {
    title: string;
    eventHeadline: string;
    timestamp: string;
    eventType: 'live' | 'pre-recorded' | 'premiers';
    type: 'free' | 'paid' | 'private';
    eventImage: StaticImageData;
    attendeesTotal: number;
    id: number;
    role: string;
    description: string;
}


export const events: Event[] = [
    {
        title: "This is the beginning of the end",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "premiers", //live, pre-recorded, premiers 
        type: "free", //free/paid/private
        eventImage: image,
        attendeesTotal: 20,
        id: 1,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        title: "The LinkStream App live launch",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "live", //live, pre-recorded, premiers 
        type: "paid", //free/paid/private
        eventImage: image,
        attendeesTotal: 23,
        id: 2,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        title: "The Web-3 Lagos Conference",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "pre-recorded", //live, pre-recorded, premiers 
        type: "private", //free/paid/private
        eventImage: image,
        attendeesTotal: 29,
        id: 3,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        title: "The Creed II",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "live", //live, pre-recorded, premiers 
        type: "free", //free/paid/private
        eventImage: image,
        attendeesTotal: 30,
        id: 4,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        title: "Anikulapo: The rise of the spectre",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "premiers", //live, pre-recorded, premiers 
        type: "paid", //free/paid/private
        eventImage: image,
        attendeesTotal: 68,
        id: 5,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        title: "This is the link stream",
        eventHeadline: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        timestamp: "2023-09-27T17:30:08.111Z",
        eventType: "pre-recorded", //live, pre-recorded, premier
        type: "private", //free/paid/private
        eventImage: image,
        attendeesTotal: 1000,
        id: 6,
        role: "Hosting",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
];
