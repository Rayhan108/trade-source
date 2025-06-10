import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa"
import hero from "../../../../assests/hero.png";
import jesi from "../../../../assests/jesi.jpg";
import Image from 'next/image';
import RecentArticle from '../../../Component/Home/RecentArticle';
const ArticleDetailsPage = () => {
    return (
      <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            I Created A Developer Rap Video - Here's What I Learned
          </h1>

          {/* Author Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-">
            <div className="flex items-center space-x-2">
               <div className="">
                      <Image
                        src={jesi}
                        alt=""
                        height={500}
                        width={500}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
              <span>Jessica koli</span>
            </div>
            <span>02 december 2022</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-lg ">
        <Image
                    src={hero}
                    alt="Contractor working with wood"
                    className="h-full w-full object-cover py-5"
                    width={500}
                    height={500}
                  />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray ">
          {/* Introduction */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Finding a trusted contractor for your home improvement needs can feel like a daunting task. With so many
            options out there, how do you ensure you're hiring someone who's not only skilled but also reliable and
            professional? At YourTradeSource (YTS), we've made it our mission to connect homeowners with licensed,
            vetted, and verified professionals in industries like plumbing, electrical work, HVAC, and construction.
            Here's how to simplify the process and find the right fit for your next project.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">1. Start with the Right Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before you begin searching for contractors, it's essential to have a clear understanding of your project.
              What exactly do you need done? Whether it's a small plumbing repair or a full home renovation, having a
              well-defined scope of work will help you narrow down the list of potential contractors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At YTS, we allow homeowners to browse through our detailed service listings, search by location and
              expertise, and access contractor profiles that provide transparency into their skills, experience, and
              past work. By understanding your needs up front, you can quickly find contractors who specialize in the
              exact service you require.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">2. Look for Verified Contractors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trust is key when inviting someone into your home. That's why all contractors on YTS are verified. Our VIP
              contractors have gone through a rigorous screening process to ensure they're licensed, insured, and
              qualified to handle your project. These professionals display a verified badge on their profiles so you
              can easily identify those who meet the highest standards of excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unlike other directories that may list unverified individuals, YTS ensures that every contractor in our
              network has proven experience and a track record of delivering quality results.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">3. Read Reviews and View Past Work</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              What sets great contractors apart from the rest? It's their ability to deliver exceptional work that
              leaves clients happy. At YTS, we encourage homeowners to check reviews and browse contractor profiles that
              showcase their work. Contractors can upload photos, videos, and certifications, giving you a clear picture
              of their expertise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Additionally, real-time client feedback and ratings help you make informed decisions. When you see a
              contractor who has consistently received positive reviews, you can feel confident knowing they'll bring
              the same level of professionalism to your project.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">4. Connect Directly with Contractors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the best features of YTS is the direct connection between homeowners and contractors. Once you've
              found potential contractors, you can reach out to them through our platform's messaging system to ask
              questions, discuss your project, and request a quote. This eliminates the hassle of playing phone tag or
              waiting for emails.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For VIP contractors, our platform also provides a private commenting system where you can discuss project
              specifics with fellow contractors, ensuring your project is managed with the utmost care and attention.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">5. Transparency and Communication</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The foundation of any successful project is clear, open communication. With YTS, contractors and clients
              can communicate efficiently throughout the project lifecycle. From initial consultation to project
              completion, our platform offers tools that keep both parties in the loop, helping to avoid
              misunderstandings and ensuring smooth collaboration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you're a homeowner looking for professional advice, our "Ask-a-Pro" feature connects you with licensed
              experts, allowing you to get trusted guidance before making any decisions.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">6. Make Sure You're Protected</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Finally, always ensure that the contractor you choose is fully insured and licensed. YTS only lists
              contractors who meet these legal requirements. This ensures you're working with professionals who are
              fully accountable for their work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Additionally, YTS makes the process of requesting quotes and payments simple and secure, giving you peace
              of mind as you manage your project from start to finish.
            </p>
          </div>

          {/* Final Thoughts */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At YTS, we understand how important your home is to you. That's why we've designed our platform to give
              you access to trustworthy, verified professionals who can bring your vision to life. Whether you're
              planning a major remodel or need a quick repair, YourTradeSource makes it easy to find the right
              contractor for the job. With our easy-to-use platform, you'll feel confident in your choices, knowing that
              every contractor has been carefully vetted for your protection.
            </p>
            <p className="text-gray-700 leading-relaxed">Start your home improvement journey with YTS today!</p>
          </div>

          {/* Social Media Share */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Share on X"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                aria-label="Share on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Share on Pinterest"
              >
                <FaPinterestP className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <RecentArticle/>
    </div>
    );
};

export default ArticleDetailsPage;

