Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new do
    root to: 'dashboard#index', as: :dashboard
  end

  constraints Clearance::Constraints::SignedOut.new do
    root to: 'home#index'
  end
end
