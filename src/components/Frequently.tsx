"use client"

import { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Can I cancel my plan at any time, are there contracts?",
    answer: "There are no contracts, and you can upgrade, downgrade, or cancel your plan within your account settings menu at any time."
  },
  {
    question: "What is the refund policy?",
    answer: "If you're not 100% satisfied with your SiteCurve subscription, we offer a 14-day refund of your initial purchase. Please email support@sitecurve.com."
  },
  {
    question: "I have a lot of keywords, how big can I make a single landscape?",
    answer: "Our infrastructure can handle millions of keywords per day. Business accounts can add up to 100,000 keywords per account, enterprise can add up to 1 million keywords."
  },
  {
    question: "What is a landscape?",
    answer: "A landscape is a collection of every website competing within the top 20 search rankings for the keywords you've added to the platform. Each landscape provides an isolated view of performance trends, so you can focus on specific keyword sets without interference from other landscapes."
  },
  {
    question: "How small can a landscape be?",
    answer: "Landscapes can be as small as 250 keywords or as large as 1 million keywords (for enterprise). Although possible, we do not recommend going lower than 250 keywords per landscape to ensure a rich landscape with actionable data."
  },
  {
    question: "How many landscapes can I make?",
    answer: "You can build an unlimited number of landscapes, you just pay for keywords. Keywords in accounts can be applied all to one landscape or spread across multiple landscapes. You can add up to 100,000 keywords to a single landscape for business accounts and 1 million for enterprise."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial of our Business plan (no credit card required). With a free trial account you get 250 free keywords to try out SiteCurve. If you want more keywords, simply upgrade to a paid plan."
  },
  {
    question: "What happens if I cancel my subscription or my trial runs out?",
    answer: "All of the data and settings in your account will still be there but be inaccessible unless you re-subscribe. We will stop updating the keywords in your landscapes."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white p-4 md:p-6 max-w-6xl mx-auto my-11">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-8 text-center">Everything you need to know about SiteCurve.</p>
      
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b-[1px] border-gray-200 pb-4 md:pb-0 ">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium pr-8">{item.question}</span>
              {openIndex === index ? (
                <CiCircleMinus className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <CiCirclePlus className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}