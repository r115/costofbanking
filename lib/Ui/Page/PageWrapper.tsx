import React, {ReactElement} from "react";

function PageWrapper({ children}): ReactElement {
    return (
        <>
            <main className={'w-full h-full flex flex-col relative'}>
                <div className={'w-full h-16 bg-black px-3'}>
                    <div className={'container mx-auto'}>
                        <div className={'text-yellow-200 pt-2 font-mono text-lg'}>
                            //cost.of.banking
                        </div>
                        <div className={'text-yellow-200 pt-1 font-mono text-xs'}>
                            Banking tariffs comparison engine.
                        </div>
                    </div>
                </div>
                <div className={'w-full'}>
                    <div className={'container mx-auto'}>
                        {children}
                    </div>
                </div>

            </main>
        </>
    )
}

export default PageWrapper;
