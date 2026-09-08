import { convertRatingTo10Scale } from "@options/films/filmsUtils";
import { isOptionEnabled } from "@utils/chrome-storage";
import { createSignal, onMount } from "solid-js";

interface FilmBadgeProps {
    rating?: string;
    isColorfulBadge: boolean;
}

const getRatingColorClass = (rating: string | undefined): string => {
    if (!rating) return "bg-gray-400 text-black";
    const numericRating = Number(rating);

    if (numericRating <= 2) return "bg-[#ff3333] text-white"; // Proper Red
    if (numericRating >= 2 && numericRating < 3) return "bg-[#ff8000] text-white"; // Orange
    if (numericRating >= 3 && numericRating < 3.5) return "bg-[#ffcc00] text-black"; // Yellow
    if (numericRating >= 3.5 && numericRating < 4) return "bg-[#00e054] text-black"; // Letterboxd vibrant green
    if (numericRating >= 4) return "bg-[#009900] text-white"; // Deep proper green

    return "bg-gray-400 text-black";
};

const FilmBadge = ({ rating, isColorfulBadge }: FilmBadgeProps) => {
    const [useScale10, setUseScale10] = createSignal(false);

    onMount(async () => {
        // Check if rating scale conversion is enabled
        const scaleEnabled = await isOptionEnabled("5520bd3a-d90b-4cbf-9fa7-84888f077751");
        setUseScale10(scaleEnabled);
    });
    // Always use original rating for color determination, and always make it colorful
    const ratingColor = getRatingColorClass(rating);

    const displayRating = () => {
        const scale10 = useScale10();
        return scale10 && rating ? convertRatingTo10Scale(rating) : rating;
    };
    return (
        <div
            class={`css-film-badge absolute flex flex-col items-center text-[15px] gap-0.5 px-1.5 py-1 min-w-[28px] right-0 top-0 rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg ${ratingColor}`}
        >
            {displayRating() ? Number(displayRating()).toFixed(1) : "?"}
        </div>
    );
};

export default FilmBadge;
