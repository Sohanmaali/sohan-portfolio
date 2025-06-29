import Link from "next/link";
import styles from '@/styles/animations.module.css';
import { FiArrowRight } from "react-icons/fi";

export default function Button({text, href}: {text: string, href: string}) {
    return (
        <div className={`${styles.animate}  text-center group`}>
        <Link
            href={href}
            className="relative inline-flex items-center px-8 py-4 overflow-hidden text-base font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-600 dark:to-emerald-700 rounded-lg group-hover:from-teal-600 group-hover:to-emerald-700 dark:group-hover:from-teal-700 dark:group-hover:to-emerald-800 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-16 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex items-center">
                {text}
                <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </Link>
    </div>
    )
}