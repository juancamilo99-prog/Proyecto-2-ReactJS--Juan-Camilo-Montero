import React from 'react'

export function SkeletonCard (){
  return (
    <div className="rounded-xl overflow-hidden bg-card border border-border">
        <div className="aspect-3/4 skeleton">
            <div className="p-3 space-y-2">
                <div className="h-4 skeleton rounded w-3/4">
                    <div className="h-3 skeleton rounded w-1/2">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
