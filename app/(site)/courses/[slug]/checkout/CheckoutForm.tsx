"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { enrollInCourse, type EnrollmentState } from "./actions"
import type { Course } from "@prisma/client"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface CheckoutFormProps {
  course: Course & { category: { name: string } }
}

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          Processing...
        </>
      ) : (
        "Complete Enrollment"
      )}
    </button>
  )
}

export default function CheckoutForm({ course }: CheckoutFormProps) {
  const initialState: EnrollmentState = { status: "idle" }
  const [state, formAction] = useFormState(enrollInCourse, initialState)
  const [paymentOption, setPaymentOption] = useState<"now" | "later">("now")

  return (
    <div className="mt-8 space-y-6">
      {state.status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Enrollment Successful</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>{state.message}</p>
              </div>
              <div className="mt-4">
                <div className="flex space-x-3">
                  <a
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    View Course
                  </a>
                  <a
                    href="/dashboard"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Go to Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <input type="hidden" name="courseId" value={course.id} />

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Options</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="pay-now"
                  name="paymentOption"
                  type="radio"
                  value="now"
                  checked={paymentOption === "now"}
                  onChange={() => setPaymentOption("now")}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                />
                <label htmlFor="pay-now" className="ml-3 block text-sm font-medium text-gray-700">
                  Pay Now (${course.price.toFixed(2)})
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="pay-later"
                  name="paymentOption"
                  type="radio"
                  value="later"
                  checked={paymentOption === "later"}
                  onChange={() => setPaymentOption("later")}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                />
                <label htmlFor="pay-later" className="ml-3 block text-sm font-medium text-gray-700">
                  Pay Later (Installments available)
                </label>
              </div>
            </div>

            {paymentOption === "now" && (
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Payment Details</h4>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        placeholder="1234 1234 1234 1234"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                      Expiration date
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="expiration-date"
                        name="expiration-date"
                        placeholder="MM / YY"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        name="name-on-card"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {state.status === "error" && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{state.message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <SubmitButton />
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            By enrolling, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  )
}

