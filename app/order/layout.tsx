import OrderSideBar from "@/components/order/OrderSideBar";
import OrderSumary from "@/components/order/OrderSumary";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="md:flex">
                <OrderSideBar />
                
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>

                <OrderSumary />
            </div>
        </>
    );
}
