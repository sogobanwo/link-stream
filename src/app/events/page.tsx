/* eslint-disable react/no-unescaped-entities */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold leading-none">Team Building</CardTitle>
          <CardDescription className="text-sm font-normal leading-none">Fri, May 17, 10:00 AM</CardDescription>
        </CardHeader>
        <CardContent className="text-sm border-y py-4">
          <p className="mb-4">
            Join us for a day of team building activities to strengthen our collaboration and have some fun together.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold leading-none">Product Launch</CardTitle>
          <CardDescription className="text-sm font-normal leading-none">Wed, June 5, 3:00 PM</CardDescription>
        </CardHeader>
        <CardContent className="text-sm border-y py-4">
          <p className="mb-4">
            Be the first to see our new product lineup. We're launching with style, innovation, and a touch of surprise.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold leading-none">Conference Keynote</CardTitle>
          <CardDescription className="text-sm font-normal leading-none">Mon, July 22, 9:30 AM</CardDescription>
        </CardHeader>
        <CardContent className="text-sm border-y py-4">
          <p className="mb-4">
            Our keynote speaker will inspire, inform, and ignite your passion for the future. Don't miss this
            opportunity to gain new insights.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-bold leading-none">Quarterly Review</CardTitle>
          <CardDescription className="text-sm font-normal leading-none">Fri, August 16, 2:00 PM</CardDescription>
        </CardHeader>
        <CardContent className="text-sm border-y py-4">
          <p className="mb-4">
            We'll look back at our achievements, address challenges, and chart the course for the next quarter. Your
            participation is crucial.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

