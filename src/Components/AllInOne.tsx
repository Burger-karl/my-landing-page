import React from 'react'
import { FiFileText, FiCalendar, FiUsers } from 'react-icons/fi'

const features = [
  {
    icon: FiFileText,
    iconBg: 'bg-[#6C63FF]',
    title: 'Online Billing, Invoicing, & Contracts',
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: FiCalendar,
    iconBg: 'bg-[#1FC8A9]',
    title: 'Easy Scheduling & Attendance Tracking',
    description:
      'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
  },
  {
    icon: FiUsers,
    iconBg: 'bg-[#29B6E8]',
    title: 'Customer Tracking',
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
  },
]

const AllInOne = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="font-heading font-semibold text-2xl md:text-4xl">
        <span className="text-[#0D0D26]">All-In-One </span>
        <span className="text-[#1FC8A9]">Cloud Software.</span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-[#5B5B5B] text-base md:text-lg">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>

      <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="relative rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] pt-16 pb-10 px-6"
            >
              <div
                className={`absolute -top-9 left-1/2 -translate-x-1/2 size-18 rounded-full flex items-center justify-center shadow-lg ${feature.iconBg}`}
              >
                <Icon className="text-white size-8" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-[#25243D]">
                {feature.title}
              </h3>

              <p className="mt-4 text-[#5B5B5B]">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AllInOne