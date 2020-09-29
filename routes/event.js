//Event Routes  

router.get("/event/create", (req, res, next) => {
    res.render("create-event", { title: "Create New Event" });
  });

router.get("/event/:id/edit", (req, res, next) => {
    res.render("edit-event", { title: "Edit Event" });
  });
