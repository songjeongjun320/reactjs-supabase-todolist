"use client";

import { Input, Button } from "@material-tailwind/react";
import Todo from "components/todo";

export default function UI() {
  return (
    <div className="w-2/3 mx-auto h-2 flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">TODO LIST</h1>
      <Input
        label="Search TODO"
        placeholder="Search TODO"
        icon={<i className="fas fa-search" />}
      />
      <Todo />

      <Button>
        <i className="fas fa-plus mr-2" />
        Add TODO
      </Button>
    </div>
  );
}
