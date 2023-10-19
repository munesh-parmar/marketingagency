import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Digital Marketing",
        text: "From Clicks to Conversions - We Lead the Digital Journey"
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Trade Shows",
        text: "Where Handshakes Lead to Breakthroughs – Trade Shows"
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Branding",
        text: "Forge a Lasting Impression with the Power of Branding"
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Content Creation",
        text: "Words, Visuals, Magic – Our Content Creators Deliver"
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "Grpahic Design",
        text: "Bringing Concepts to Life, One Pixel at a Time."
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "Media Buying",
        text: "Turning Ad Space into Impactful Engagements"
    }
];

const about = [
    {
        id: 7,
        text: "isi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Your brand deserves ideas as extraordinary as your vision. We deliver."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Ideas are the currency of innovation, and we're the bankers."
    }
];

const features = [
    {
        id: 10,
        title: "Digital Marketing",
        text: "In essence, digital marketing is about reaching the right people at the right time with the right message in the digital realm. Whether it's through search engines, social media, email, or other online platforms, our goal is to elevate your brand's visibility, engage your audience, and drive the growth and success of your business "
    },
    {
        id: 11,
        title: "Trade Shows",
        text: "At a trade show, you have the opportunity to present your brand in a physical, interactive space. This is where you can set up a booth or exhibit that reflects your brand identity, display your latest products or innovations, and engage with attendees in person. It's a chance to forge meaningful connections, generate leads, and close deals"
    },
    {
        id: 12,
        title: "Branding",
        text: "We are here to help you craft and express that brand identity in a consistent and compelling way. This includes designing a visual identity, developing a unique voice and messaging, and creating a memorable customer experience. We ensure that your brand resonates with your target audience and aligns with your business values and goals."
    },
    {
        id: 13,
        title: "Content Creation",
        text: "Our role is to develop and execute a content strategy that resonates with your audience. We research, plan, create, and distribute content that not only showcases your expertise but also speaks to the needs and interests of your target market. Whether it's educating, entertaining, or inspiring your audience, our content creation efforts aim to strengthen your brand's online presence and customer relationships."
    }, 
    {
        id: 14,
        title: "Graphic Design",
        text: "We use graphic design to ensure that your brand is not only visually appealing but also consistent across all marketing materials. Our graphic designers work to capture the essence of your brand, express your values, and create a memorable visual identity. Whether it's through a stunning logo, a captivating website, or an eye-catching advertisement, our graphic design efforts aim to leave a lasting impression on your audience."
    },
    {
        id: 15,
        title: "Media Buying",
        text: "Our role in media buying is to leverage our expertise and industry insights to secure the most favorable advertising placements. We aim to maximize your return on investment (ROI) by identifying opportunities, negotiating rates, and ensuring your message is seen or heard by the people most likely to convert into customers."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Website Development",
        text: "Websites they've designed and developed, highlighting their skills in web design, user experience, and functionality.",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Search Engine Optimization (SEO) Success",
        text: "Examples of how they've improved a client's search engine rankings and online visibility.",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Content Marketing",
        text: "Samples of blog posts, articles, videos, or other content they've created to engage and inform the target audience.",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: " Their SEO efforts pushed our website to the top of search results.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Their dedication to understanding our brand and delivering tailored solutions has had a profound impact on our growth.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "They took our vision and transformed it into a brand identity that resonates with our target audience.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Their marketing campaigns were not only effective but also delivered on time and within budget.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "They've helped us navigate the ever-changing digital landscape and have been instrumental in our brand's growth and success.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Their data-driven approach and innovative strategies are unmatched. I'm thrilled with the ROI we've seen",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+92 336 1186900",
        text: "If you have any query don't hesitate to contact us"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "marketingagencyhub@gmail.com",
        text: "Feel free to send us your requirements of any project related work"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Gulshan-e-Iqbal, Block 10, Karachi",
        text: "You can visit us at any time and any day to know more about the services we provide"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;