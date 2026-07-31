export function HostingError() {
    return (
        <div className="min-h-screen bg-[#f6f6f6] flex flex-col items-center justify-center px-4 font-sans">
            <div className="w-full max-w-2xl">
                <div className="bg-[#e8312a] h-2 w-full rounded-t-md" />
                <div className="bg-white shadow-lg rounded-b-md p-10 border border-gray-200">
                    <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                        <div className="w-8 h-8 rounded-full bg-[#e8312a] flex items-center justify-center">
                            <span className="text-white font-bold text-sm">!</span>
                        </div>
                        <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">NexHost Platform</span>
                    </div>
                    <p className="text-[13px] font-semibold text-[#e8312a] tracking-widest uppercase mb-2">
                        Error 523 — Site Suspended
                    </p>
                    <h1 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 leading-tight">
                        This website is currently unavailable
                    </h1>
                    <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed mb-6">
                        Access to this site has been restricted following a change in our hosting terms and policies.
                        The site owner must migrate to a compliant hosting plan to restore public access.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-8 text-[15px] text-gray-600 space-y-2">
                        <p><span className="font-semibold text-gray-800">What happened?</span> Hosting policies were updated and this domain no longer meets the requirements of the current plan.</p>
                        <p><span className="font-semibold text-gray-800">What can the site owner do?</span> Log in to your hosting dashboard and upgrade or migrate your plan to restore access.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 pt-6 text-[13px] text-gray-400">
                        <span>Ray ID: 8f3a92c1b004d7e2</span>
                        <span>NexHost &bull; Policy Enforcement &bull; Error 523</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
