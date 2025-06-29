
import Button from '../Button';

export default function CTASection() {
    return (
        <section className={`py-10 relative`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to bring your ideas to life?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        I'm currently available for freelance work. If you have a project in mind or want to chat about potential opportunities, feel free to reach out!
                    </p>
                    <Button text="Get in Touch" href="/contact" />
                </div>
            </div>
        </section>
    );
}